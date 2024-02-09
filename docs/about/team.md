---
layout: page
title: 认识团队
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'


const coreMembers = [
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=1990248284&spec=100',
    name: 'wlingzhenyu',
    title: '主作者',
    links:[
      { icon: 'github', link: 'https://github.com/wling-art' }],
    sponsor: 'https://afdian.net/a/ZLServer',
    actionText: '捐赠作者'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=3603866430&spec=100',
    name: '海棠',
    title: '群管'
  }
]

const partners = [
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=1519412035&spec=100',
    name: 'Gemence',
    title: '捐赠 1 次, 共 5 元',
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=869379440&spec=100',
    name: '风林',
    title: '捐赠 37 次, 共 195 元',
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
    title: '捐赠 3 次, 共 75 元',
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
    title: '捐赠 1 次, 共 1 元'
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=1278560068&spec=100',
    name: 'kou1024',
    title: '捐赠 1 次, 共 50 元'
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      认识团队
    </template>
    <template #lead>
      在这个页面你将了解为项目做出贡献的人
    </template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>管理团队</template>
    <template #lead>这是目前是U1的管理团队, 感谢他们让U1更美好!</template>
    <template #members>
      <VPTeamMembers size="medium" :members="coreMembers" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>赞助者</template>
    <template #lead>这些是捐赠过U1的人, 感谢他们让作者渡过难关!(排名不分先后)</template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
