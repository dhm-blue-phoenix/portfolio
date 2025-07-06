import { Routes } from '@angular/router';

import { DesktopComponent } from './desktop/desktop.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

export const routes: Routes = [
    { path: '', component: DesktopComponent },
    { path: 'privacypolicy', component: PrivacyPolicyComponent },
    { path: 'legalnotice', component: LegalNoticeComponent }
];
