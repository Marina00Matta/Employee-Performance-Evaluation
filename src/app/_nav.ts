import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
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
    name: 'Admin',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Users',
        url: '/base/Users',
        icon: 'icon-puzzle'
      },
      {
        name: 'Groups',
        url: '/base/groups',
        icon: 'icon-puzzle'
      },
      {
        name: 'Criterias',
        url: '/base/criteria',
        icon: 'icon-puzzle'
      },
      {
        name: 'Indicators',
        url: '/base/indicator',
        icon: 'icon-puzzle'
      },
      {
        name: 'Evaluation Cycle',
        url: '/base/EvaluationCycle',
        icon: 'icon-puzzle'
      },
      {
        name: 'positions',
        url: '/base/positions',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Users ',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Evaluation',
        url: '/buttons/evaluation',
        icon: 'icon-cursor'
      },
      {
        name: 'Reports',
        url: '/buttons/reports',
        icon: 'icon-cursor'
      }
    ]
  },
];
