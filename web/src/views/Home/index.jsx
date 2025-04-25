import React, { useEffect, useState } from 'react';
import { showError } from 'utils/common';
import { API } from 'utils/api';
import BaseIndex from './baseIndex';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ContentViewer from 'ui-component/ContentViewer';

const Home = () => {
  const { t } = useTranslation();
  const [homePageContentLoaded, setHomePageContentLoaded] = useState(false);
  const [homePageContent, setHomePageContent] = useState('');

  const displayHomePageContent = async () => {
    setHomePageContent(localStorage.getItem('home_page_content') || '');
    try {
      const res = await API.get('/api/home_page_content');
      const { success, message, data } = res.data;
      if (success) {
        setHomePageContent(data);
        localStorage.setItem('home_page_content', data);
      } else {
        showError(message);
        setHomePageContent(t('home.loadingErr'));
      }
      setHomePageContentLoaded(true);
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    displayHomePageContent().then();
  }, []);

  const defaultHomePageContent = (
    <>
      <section className="hero">
        <div className="text">
          <h1>{t('一站式人工智能集成平台')}</h1>
          <h2>{t('与ChatGPT、Claude、Gemini等数百万个人工智能模型交谈。')}</h2>
          {/* 按钮文本根据登录状态变化 */}
          <a href="#" onClick={handleActionClick} className="cta">
            {account.user ? t('进入控制台') : t('开始使用')}
          </a>
        </div>
      </section>
      <section className="application">
        <h3>{t('我们提供的服务')}</h3>
        <div className="application-container">
          <div className="application-item">
            <img src="https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/gradio-color.svg" alt="GPT 学术优化" />
            <h4>{t('GPT学术优化')}</h4>
            <p>{t('优化论文阅读/润色/写作体验，支持Python和C++等项目剖析与自译解功能，PDF/LaTex论文翻译与总结')}</p>
            <a href="https://acad.llmhub.com.cn" className="chat" target="_blank" rel="noreferrer">{t('开始使用')}</a>
          </div>
          <div className="application-item">
            <img src="https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/lobehub-color.svg" alt="Lobe Chat" />
            <h4>Lobe Chat</h4>
            <p>{t('现代化设计的开源 ChatGPT/LLMs 聊天应用与开发框架')}</p>
            <a href="https://lobe.llmhub.com.cn" className="chat" target="_blank" rel="noreferrer">{t('开始使用')}</a>
          </div>
          <div className="application-item">
            <img src="https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/openwebui.svg" alt="Open WebUI" />
            <h4>Open WebUI</h4>
            <p>{t('可扩展、功能丰富且用户友好的自托管WebUI')}</p>
            <a href="https://open.llmhub.com.cn" className="chat" target="_blank" rel="noreferrer">{t('开始使用')}</a>
          </div>
          <div className="application-item">
            <img src="/favicon.ico" alt="API" />
            <h4>{t('API服务')}</h4>
            <p>{t('支持多种模型，包括ChatGPT、Claude、Grok、Gemini、DALL-E等大语言模型API调用')}</p>
            <a href="https://www.llmhub.net/token" className="chat" target="_blank" rel="noreferrer">{t('开始部署')}</a>
          </div>
        </div>
      </section>
      <section className="models">
        <h3>{t('完美适配众多大语言模型')}</h3>
        <div className="grid">
          <div className="grid-item">
            <a href="https://openai.com" target="_blank" rel="noreferrer">
              <img src="https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/openai.svg" alt="OpenAI ChatGPT"/>
              <p>ChatGPT</p>
            </a>
          </div>
          <div className="grid-item">
            <a href="https://www.anthropic.com" target="_blank" rel="noreferrer">
              <img src="https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/claude-color.svg" alt="Anthropic Claude"/>
              <p>Claude</p>
            </a>
          </div>
          <div className="grid-item">
            <a href="https://gemini.google.com" target="_blank" rel="noreferrer">
              <img src="https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/gemini-color.svg" alt="Google Gemini"/>
              <p>Gemini</p>
            </a>
          </div>
          <div className="grid-item">
            <a href="https://x.ai" target="_blank" rel="noreferrer">
              <img src="https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/grok.svg" alt="Google Gemini"/>
              <p>Grok</p>
            </a>
          </div>
          <div className="grid-item">
            <a href="https://www.deepseek.com" target="_blank" rel="noreferrer">
              <img src="https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/deepseek-color.svg" alt="Midjourney"/>
              <p>DeepSeek</p>
            </a>
          </div>
          <div className="grid-item">
            <a href="https://www.aliyun.com/product/bailian" target="_blank" rel="noreferrer">
              <img src="https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/qwen-color.svg" alt="通义千问"/>
              <p>通义千问</p>
            </a>
          </div>
          <div className="grid-item">
            <a href="https://www.zhipuai.cn" target="_blank" rel="noreferrer">
              <img src="https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/zhipu-color.svg" alt="智谱GLM"/>
              <p>智谱GLM</p>
            </a>
          </div>
        </div>
      </section>
      <section className="uses">
        <h3>{t('大语言模型的主要用途')}</h3>
        <div className="uses-container">
          <div className="uses-item">
            <h4>{t('自然语言处理')}</h4>
            <p>{t('文本生成、语言翻译、摘要提取、情感分析等。')}</p>
          </div>
          <div className="uses-item">
            <h4>{t('教育辅助')}</h4>
            <p>{t('论文写作、作业辅助、知识问答、编程辅助等。')}</p>
          </div>
          <div className="uses-item">
            <h4>{t('代码辅助')}</h4>
            <p>{t('代码生成、代码补全、代码翻译、代码注释等。')}</p>
          </div>
          <div className="uses-item">
            <h4>{t('创意生成')}</h4>
            <p>{t('图像生成、音频生成、视频生成、设计生成等。')}</p>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <>
      {homePageContentLoaded && homePageContent === '' ? (
        <BaseIndex />
      ) : (
        <Box>
          <ContentViewer
            content={homePageContent}
            loading={!homePageContentLoaded}
            errorMessage={homePageContent === t('home.loadingErr') ? t('home.loadingErr') : ''}
            containerStyle={{ minHeight: 'calc(100vh - 136px)' }}
            contentStyle={{ fontSize: 'larger' }}
          />
        </Box>
      )}
    </>
  );
};

export default Home;
