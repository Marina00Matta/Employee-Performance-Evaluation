import { INavData } from '@coreui/angular';


export const navUserItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'User',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Evaluation',
        url: '/buttons/evaluation',
        icon: 'icon-cursor'
      },{
        name: 'Reports',
        url: '/buttons/reports',
        icon: 'icon-cursor'
      }
    ]
  },
];
