import { initAccountingDashboard } from './accounting/accounting';
import { initCommerceDashboard } from './commerce/commerce';
import { initDomoticDashboard } from './domotic/domotic';
import { iniHostingDashboard } from './hosting/hosting';
import { initSupportDashboard } from './support/support';
import { initSupportTicket } from './support/ticket';
import { initInbox } from './inbox/inbox';
import { initContactDetails } from './contact/contact';
import { initProjectDetails } from './project/project';
import { initCrmKanban } from './kanban/kanban';
import { initCrmDeal } from './deal/deal';
import { initForumTopic } from './forum/topic';

import { initApexCharts } from '../charts/apex';

window.initAccountingDashboard = initAccountingDashboard;
window.initCommerceDashboard = initCommerceDashboard;
window.initDomoticDashboard = initDomoticDashboard;
window.iniHostingDashboard = iniHostingDashboard;
window.initSupportDashboard = initSupportDashboard;
window.initSupportTicket = initSupportTicket;
window.initInbox = initInbox;
window.initContactDetails = initContactDetails;
window.initProjectDetails = initProjectDetails;
window.initCrmKanban = initCrmKanban;
window.initCrmDeal = initCrmDeal;
window.initForumTopic = initForumTopic;

window.initApexCharts = initApexCharts;

