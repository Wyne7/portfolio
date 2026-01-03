import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILLS ,SkillItem} from '../../data/skill'; // Import both

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  // Use 'SkillItem' for typing, and 'SKILLS' for the value
  mySkills: SkillItem[] = SKILLS;
}