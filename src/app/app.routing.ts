import {Routes, RouterModule} from '@angular/router';
import {WhiteBoardComponent} from "./white-board/white-board.component";
import {CourseViewerComponent} from "./course-viewer/course-viewer.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {SectionListComponent} from "./section-list/section-list.component";
import {AdminConsoleComponent} from "./admin-console/admin-console.component";
import {FormListComponent} from "./form-list/form-list.component";
import {FormViewerComponent} from "./form-viewer/form-viewer.component";
import {SubmissionListComponent} from "./submission-list/submission-list.component";
import {SubmissionViewerComponent} from "./submission-viewer/submission-viewer.component";

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: WhiteBoardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'admin-console', component: AdminConsoleComponent},
  {path: 'forms', component: FormListComponent},
  {path: 'form/:formId', component: FormViewerComponent},
  {path: 'form/:formId/submissions', component: SubmissionListComponent},
  {path: 'form/:formId/submission/:submissionId', component: SubmissionViewerComponent},
  {path: 'course/:courseId', component: CourseViewerComponent},
  {path: 'course/:courseId/section', component: SectionListComponent},
  {path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseViewerComponent},
  {path: '**', component: WhiteBoardComponent} // last
];
export const routing = RouterModule.forRoot(appRoutes);
