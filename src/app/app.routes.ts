import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { NotificationComponent } from './components/notification/notification.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TempleVisitsComponent } from './components/temple-visits/temple-visits.component';
import { TempleDetailsComponent } from './components/temple-details/temple-details.component';
import { LiveDarshanComponent } from './components/live-darshan/live-darshan.component';
import { FeedbackSupportComponent } from './components/feedback-support/feedback-support.component';
import { ListContentComponent } from './components/list-content/list-content.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'Profile',
    component:ProfileComponent,
  },
  {
    path: 'Favorites',
    component:FavoritesComponent,
  },
  {
    path: 'Notifications',
    component:NotificationComponent,
  },
  {
    path: 'Subscriptions',
    component:LiveDarshanComponent,
  },
  {
    path: 'Temples',
    component:ListContentComponent,
  },
  {
    path: 'Settings',
    component:SettingsComponent,
  },
  {
    path: 'temple-details',
    component:TempleDetailsComponent,
  },
  {
    path: 'how-to-visit',
    component:TempleVisitsComponent,
  },
  {
    path: 'Feedback',
    component:FeedbackSupportComponent,
  },

];
