import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NavbarService {
  private activeMenuItemSource = new BehaviorSubject<string>('');
  public activeMenuItem$ = this.activeMenuItemSource.asObservable();

  /**
   * Sets the active menu item globally.
   * 
   * @param id - The menu ID, eg. B. 'navSkills'etc.
   */
  public setActiveMenuItem(id: string): void {
    this.activeMenuItemSource.next(id);
  }
}