import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    {
        path: '', component:HomeComponent
    },
    {
        path: 'policy', component: PrivacyPolicyComponent
    },
    {
        path: 'contact', component: ContactComponent
    },
    {
        path: 'projects', component: ProjectsComponent
    }
];
