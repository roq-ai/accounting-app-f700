interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Guest'],
  tenantRoles: ['Admin', 'Accountant', 'Viewer', 'Tenant'],
  tenantName: 'Tenant',
  applicationName: 'Accounting APP',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ["Interact with the tenant's financial data"],
  ownerAbilities: [
    'Manage user registration and login',
    'Assign roles to users',
    'Manage tenants',
    'Log user activities and changes to financial data',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/8848a604-a745-4534-ad20-86548962524a',
};
