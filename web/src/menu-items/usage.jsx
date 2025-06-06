import { Icon } from '@iconify/react';

const icons = {
  IconArticle: () => <Icon width={20} icon="solar:document-text-bold-duotone" />,
  // 暂时禁用 midjourney 相关图标
  // IconBrush: () => <Icon width={20} icon="tabler:photo-ai" />,
  IconList: () => <Icon width={20} icon="solar:checklist-minimalistic-bold-duotone" />,
  IconInvoice: () => <Icon width={20} icon="solar:dollar-minimalistic-bold-duotone" />
};

const usage = {
  id: 'usage',
  title: 'Usage',
  type: 'group',
  children: [
    {
      id: 'log',
      title: '日志',
      type: 'item',
      url: '/panel/log',
      icon: icons.IconArticle,
      breadcrumbs: false
    },
    {
      id: 'invoice',
      title: '月度账单',
      type: 'item',
      url: '/panel/invoice',
      icon: icons.IconInvoice,
      breadcrumbs: false
    },
/*    {
      id: 'midjourney',
      title: 'Midjourney',
      type: 'item',
      url: '/panel/midjourney',
      icon: icons.IconBrush,
      breadcrumbs: false
    },*/
    {
      id: 'task',
      title: '异步任务',
      type: 'item',
      url: '/panel/task',
      icon: icons.IconList,
      breadcrumbs: false
    }
  ]
};

export default usage;
