/*
 * Copyright 2021 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
;(function () {
  'use strict'

  activateSwitch(document.getElementById('switch-theme-checkbox'))
  activateSearchShortcut(document.getElementById('search-input'))

  function activateSwitch (control) {
    if (!control) return
    control.checked = document.documentElement.classList.contains('dark-theme')
    control.addEventListener('change', onThemeChange.bind(control))
  }

  function onThemeChange () {
    var theme = this.checked ? 'dark' : 'light'
    document.documentElement.classList.toggle('dark-theme', this.checked)
    document.documentElement.classList.remove('sand-theme')
    document.documentElement.setAttribute('data-theme', theme)
    saveTheme(theme)
    this.parentElement.classList.toggle('active', this.checked)
  }

  function saveTheme (theme) {
    try {
      window.localStorage && window.localStorage.setItem('theme', theme)
    } catch (e) {}
  }

  // Focus the search field with "/" or Ctrl/Cmd+K, like most documentation sites
  function activateSearchShortcut (input) {
    if (!input) return
    document.addEventListener('keydown', function (e) {
      var target = e.target
      var typing = target && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName))
      var slash = e.key === '/' && !typing && !e.ctrlKey && !e.metaKey && !e.altKey
      var cmdK = (e.key === 'k' || e.key === 'K') && (e.ctrlKey || e.metaKey)
      if (slash || cmdK) {
        e.preventDefault()
        input.focus()
        input.select()
      }
    })
  }
})()
