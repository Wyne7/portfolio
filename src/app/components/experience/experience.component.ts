import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EXPERIENCES } from '../../data/experience';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  myExperiences = EXPERIENCES;
}