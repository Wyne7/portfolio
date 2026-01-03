import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuCollapsed = true;
  isScrolled = false;
  activeSection: string = 'home';
  isDarkMode = true;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    
    if (this.isDarkMode) {
      this.document.body.classList.remove('light-theme');
    } else {
      this.document.body.classList.add('light-theme');
    }
  }

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  closeMenu() {
    this.isMenuCollapsed = true;
  }


@HostListener('window:scroll', [])
onWindowScroll() {
  this.isScrolled = window.scrollY > 50;

  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 20) {
    this.activeSection = 'contact';
    return;
  }

  // UPDATED: Added 'skills' and 'experience' to the array
  const sections = ['home', 'skills', 'experience', 'projects', 'contact'];
  
  const scrollPosition = window.scrollY + 150; 

  for(const section of sections){
    const element = document.getElementById(section);
    if (element) {
      if (element.offsetTop <= scrollPosition && 
          (element.offsetTop + element.offsetHeight) > scrollPosition) {
        this.activeSection = section;
      }
    }
  }
}

  scrollTo(section: string) {
    this.activeSection = section;
    this.closeMenu();
  }
}
