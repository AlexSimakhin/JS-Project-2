import '../../../css/style.css';
import '../../../css/add-gadget.css';

import { authorization } from '../../index/scripts/auth/authorization';
import { reAuthorization } from '../../index/scripts/auth/reAuthorization';
import * as events from './event';

events.onsubmitProduct();

events.openLoginForm();
events.clickOnRegistrationTab();
events.clickOnLoginTab();
events.closeLoginForm();

events.registration({'product-access': false});
events.login({'product-access': false});
events.logout();

// Re-Authorization
(function () {
  if (localStorage.getItem('token')) {
    reAuthorization().then((status) => {
      if (status === 204) {
        authorization();
      }
    });
  }
}());