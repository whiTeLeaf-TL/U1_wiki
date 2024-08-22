---
layout: page
title: 赞助列表
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const sponsors = [
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=1519412035&spec=100',
    name: 'Gemence',
    title: '捐赠 1 次, 共 5 元',
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=869379440&spec=100',
    name: '风林',
    title: '捐赠 2 次, 共 195 元',
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=3603866430&spec=100',
    name: '海棠',
    title: '捐赠 2 次, 共 10 元',
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=292702551&spec=100',
    name: '空气',
    title: '捐赠 4 次, 共 175 元',
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=3530300540&spec=100',
    name: '9',
    title: '捐赠 4 次, 共 105 元',
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=2668127763&spec=100',
    name: '隔壁老衫',
    title: '捐赠 1 次, 共 10 元',
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=0&spec=100',
    name: '热血市民小彭',
    title: '捐赠 1 次, 共 10 元'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=2544028137&spec=100',
    name: '杨骐鸣',
    title: '捐赠 3 次, 共 15 元'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=242800056&spec=100',
    name: '被闰土追杀的猹',
    title: '捐赠 2 次, 共 2 元'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=1278560068&spec=100',
    name: 'kou1024',
    title: '捐赠 1 次, 共 50 元'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=1559932018&spec=100',
    name: 'city1',
    title: '捐赠 1 次, 共 10 元'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=1372855672&spec=100',
    name: '屑の五郎',
    title: '捐赠 2 次, 共 35 元'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=1914348837&spec=100',
    name: 'AAA奥尼卡义体购买安装グァ',
    title: '捐赠 2 次, 共 30 元'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=2786435963&spec=100',
    name: '碳酸',
    title: '捐赠 1 次, 共 10 元'
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      赞助列表
    </template>
    <template #lead>
      在这个页面你将了解为项目做出财力支持的人
      <a href="../others/support">如何贡献</a>
    </template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>赞助者</template>
    <template #lead>这些是捐赠过 U1 的人, 感谢他们让作者渡过难关!(排名不分先后)</template>
    <template #members>
      <VPTeamMembers size="small" :members="sponsors" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
