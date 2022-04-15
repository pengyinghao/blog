<template>
  <Common>
    <template #page>
      <div class="about-profile">
        <div class="about-avatar">
          <img :src="$withBase(pageData.frontmatter.avatar)" />
        </div>
        <div class="about-info">
          <h1 class="name">{{ pageData.frontmatter.name }}</h1>
          <p class="subname">{{ pageData.frontmatter.subname }}</p>
          <div class="sns">
            <div
              v-for="(link, platform) in LINKS"
              :key="`sns-${link}`"
              class="sns-item"
            >
              <a target="_blank" :href="link">
                <v-icon :name="snsIcon(platform)" scale="1.82" />
              </a>
            </div>
            <div v-if="pageData.frontmatter.cv" class="sns-item">
              <a :href="pageData.frontmatter.cv">
                <v-icon name="ai-cv" scale="2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="about-content theme-gungnir-content">
        <Content />
      </div>
    </template>
  </Common>
</template>

<script setup>
import { pageData } from "@vuepress/client";
import Common from "vuepress-theme-gungnir/lib/client/components/Common.vue";

const LINKS = {
  github: "https://github.com/pengyinghao",
  zhihu: "https://www.zhihu.com/people/peng-ying-hao-64",
  email: "mailto:peng.yh@qq.com"
};

const ICONS = {
  github: "ri-github-fill",
  zhihu: "ri-zhihu-line",
  email: "hi-mail"
};

const snsIcon = (platform) => ICONS[platform];
</script>
