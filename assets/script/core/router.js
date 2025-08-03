import { renderDashboardPage } from '../features/dashboard/dashboard-controller.js';
import { renderMemberPage } from '../features/member/member-controller.js';
import { renderTrainerPage } from '../features/trainer/trainer-controller.js';
import { renderPaymentPage } from '../features/payment/payment-controller.js';
// Nếu có thêm pages khác, import ở đây (ví dụ: package, schedule, user, login...)

const routes = {
  '#/dashboard': renderDashboardPage,
  '#/members': renderMemberPage,
  '#/trainers': renderTrainerPage,
  '#/payments': renderPaymentPage,
  // Thêm route khác ở đây nếu có
};

function router() {
  const hash = window.location.hash;
  const render = routes[hash] || renderDashboardPage;
  render();
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
