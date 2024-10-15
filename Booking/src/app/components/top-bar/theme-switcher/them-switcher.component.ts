import {
  storageThemeKey,
  ThemeModeService,
} from '@/app/core/services/theme-mode.service'
import { CommonModule } from '@angular/common'
import { Component, inject, Input, Renderer2 } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [NgbDropdownModule, CommonModule],
  template: `
    <li ngbDropdown class="nav-item dropdown me-2" [ngClass]="className">
      <button
        ngbDropdownToggle
        class="p-0 mb-0 arrow-none"
        [ngClass]="btnclassName"
        id="bd-theme"
        type="button"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        data-bs-display="static"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-circle-half fa-fw theme-icon-active"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
          <use href="javascript:void(0);"></use>
        </svg>
      </button>

      <ul
        ngbDropdownMenu
        class="dropdown-menu min-w-auto dropdown-menu-end"
        aria-labelledby="bd-theme"
      >
        <li class="mb-1">
          <button
            type="button"
            class="dropdown-item d-flex align-items-center"
            [class.active]="mode == 'light'"
            (click)="changeTheme('light')"
            data-bs-theme-value="light"
          >
            <svg
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-brightness-high-fill fa-fw mode-switch me-1"
              viewBox="0 0 16 16"
            >
              <path
                d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
              />
              <use href="javascript:void(0);"></use></svg
            >Light
          </button>
        </li>
        <li class="mb-1">
          <button
            type="button"
            class="dropdown-item d-flex align-items-center"
            [class.active]="mode == 'dark'"
            (click)="changeTheme('dark')"
            data-bs-theme-value="dark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-moon-stars-fill fa-fw mode-switch me-1"
              viewBox="0 0 16 16"
            >
              <path
                d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
              />
              <path
                d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"
              />
              <use href="javascript:void(0);"></use></svg
            >Dark
          </button>
        </li>
        <li>
          <button
            type="button"
            class="dropdown-item d-flex align-items-center"
            [class.active]="mode == 'auto'"
            (click)="changeTheme('auto')"
            data-bs-theme-value="auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-circle-half fa-fw mode-switch me-1"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"
              />
              <use href="javascript:void(0);"></use></svg
            >Auto
          </button>
        </li>
      </ul>
    </li>
  `,
  styles: ``,
})
export class ThemeSwitcherComponent {
  @Input() className: string = ''
  @Input() btnclassName: string = ''
  preferredTheme: string = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light'
  getTheme = localStorage.getItem(storageThemeKey)
  mode: string = this.getTheme ? this.getTheme : this.preferredTheme

  public themeModeService = inject(ThemeModeService)

  changeTheme(mode: 'light' | 'dark' | 'auto') {
    this.mode = mode
    this.themeModeService.updateTheme(mode)
  }
}
