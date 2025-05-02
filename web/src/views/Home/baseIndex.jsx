import { Box, Typography, Button, Container, Stack, Card, CardContent, Link } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { GitHub } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { onOIDCAuthClicked } from 'utils/common';
import { GlobalStyles } from '@mui/material';

const BaseIndex = () => {
  const { t } = useTranslation();
  const siteInfo = useSelector((state) => state.siteInfo);
  const account = useSelector((state) => state.account);

  // Handle login or console redirect
  const handleActionClick = (event) => {
    event.preventDefault();
    if (account.user) {
      window.location.href = '/panel';
    } else {
      if (siteInfo.oidc_auth) {
        onOIDCAuthClicked();
      } else {
        window.location.href = '/login';
      }
    }
  };

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      <GlobalStyles
        styles={`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      />

      {/* Hero Section - Updated to match old styling */}
      <Box
        sx={{
          position: 'relative',
          py: { xs: 7.5, md: 10 },
          px: { xs: 2.5, md: 5 },
          mb: 6,
          bgcolor: 'var(--primary-light, #e6f3ff)',
          textAlign: 'left'
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              maxWidth: 600,
              margin: '0 auto',
              zIndex: 1,
              position: 'relative'
            }}
          >
            <Typography variant="h1" sx={{
              fontSize: { xs: '2.2rem', md: '2.6rem' },
              fontWeight: 600,
              lineHeight: 1.4,
              mb: 1,
              background: 'linear-gradient(135deg, var(--primary-color, #0078d7), #1e90ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              {t('一站式人工智能集成平台')}
            </Typography>
            <Typography variant="h2" sx={{
              fontSize: { xs: '1.4rem', md: '1.8rem' },
              color: 'var(--text-secondary, #4a5568)',
              lineHeight: 1.4,
              mb: 1.5,
              fontWeight: 400
            }}>
              {t('与ChatGPT、Claude、Grok、Gemini、DeepSeek、Qwen等众多人工智能模型互动。')}
            </Typography>
            {/* 注释掉主页 Hero 部分的按钮
            <Button
              variant="contained"
              onClick={handleActionClick}
              sx={{
                display: 'inline-block',
                mt: 2.5,
                py: 1.5,
                px: 3.5,
                bgcolor: 'var(--primary-color, #0078d7)',
                color: 'white',
                borderRadius: 1,
                fontWeight: 400,
                boxShadow: 'var(--shadow-md, 0 4px 6px rgba(0,0,0,0.1))',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 'var(--shadow-lg, 0 10px 15px rgba(0,0,0,0.1))'
                }
              }}
            >
              {t('开始使用')}
            </Button>
            */}
          </Box>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h3" sx={{
          fontSize: '1.8rem',
          textAlign: 'center',
          mb: 4,
          fontWeight: 400,
          color: 'text.primary'
        }}>
          {t('支持的开源项目')}
        </Typography>
        <Grid container spacing={3}>
          {[
            {
              img: "https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/cline.svg",
              title: "Cline",
              desc: t('IDE 中的自主编码代理'),
              // link: "https://acad.llmhub.com.cn"
            },
            {
              img: "https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/cursor.svg",
              title: "Cursor",
              desc: t('使用 AI 编写代码的最佳方式'),
              // link: "https://acad.llmhub.com.cn"
            },
            {
              img: "https://registry.npmmirror.com/@lobehub/icons-static-svg/1.46.0/files/icons/n8n.svg",
              title: "n8n",
              desc: t('为技术团队提供灵活的 AI 工作流程自动化'),
              // link: "https://acad.llmhub.com.cn"
            },
            {
              img: "https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/dify-color.svg",
              title: "Dify",
              desc: t('开源的 LLM 应用开发平台。'),
              // link: "https://acad.llmhub.com.cn"
            },
            {
              img: "https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/gradio-color.svg",
              title: t('GPT学术优化'),
              desc: t('优化论文阅读/润色/写作体验'),
              link: "https://acad.llmhub.com.cn"
            },
            {
              img: "https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/lobehub-color.svg",
              title: "Lobe Chat",
              desc: t('现代化设计的开源 ChatGPT/LLMs 聊天应用与开发框架。'),
              link: "https://lobe.llmhub.com.cn"
            },
            {
              img: "https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/openwebui.svg",
              title: "Open WebUI",
              desc: t('可扩展、功能丰富且用户友好的自托管WebUI。'),
              link: "https://open.llmhub.com.cn"
            },
            {
              img: "/favicon.ico",
              title: t('API服务'),
              desc: t('支持多种模型，包括ChatGPT、Claude、Grok、Gemini等大语言模型API调用。'),
              link: "https://www.llmhub.net/token"
            }
          ].map((item, index) => (
            <Grid xs={12} sm={6} lg={3} key={index} sx={{
              animation: 'fadeIn 0.6s ease-out forwards',
              animationDelay: `${index * 0.2}s`
            }}>
              <Card sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 3,
                bgcolor: '#f8fafc',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 15px rgba(0,0,0,0.1)'
                }
              }}>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
                  <Box sx={{
                    mb: 2.5,
                    '& img': {
                      width: 80,
                      height: 80,
                      transition: 'transform 0.3s ease',
                    },
                    '&:hover img': {
                      transform: 'scale(1.1)'
                    }
                  }}>
                    <img src={item.img} alt={item.title} />
                  </Box>
                  <Typography gutterBottom variant="h5" component="div" sx={{
                    fontSize: '1.4rem',
                    mb: 1.5,
                    fontWeight: 400
                  }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {item.desc}
                  </Typography>
                </CardContent>
                {/*
                <Box sx={{ justifyContent: 'center', pb: 3, display: 'flex' }}>
                  <Button
                    variant="contained"
                    href={item.link}
                    target="_blank"
                    sx={{
                      bgcolor: '#0078d7',
                      borderRadius: 2,
                      px: 3,
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    {t('开始使用')}
                  </Button>
                </Box>
                */}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Models Section */}
      <Box sx={{ bgcolor: '#f8fafc', py: 5 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{
            fontSize: '1.8rem',
            textAlign: 'center',
            mb: 4,
            fontWeight: 400,
            color: 'text.primary'
          }}>
            {t('完美适配众多大语言模型')}
          </Typography>
          <Grid container spacing={2}>
            {[
              { img: "https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/openai.svg", title: "ChatGPT", link: "https://openai.com" },
              { img: "https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/claude-color.svg", title: "Claude", link: "https://www.anthropic.com" },
              { img: "https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/gemini-color.svg", title: "Gemini", link: "https://gemini.google.com" },
              { img: "https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/grok.svg", title: "Grok", link: "https://x.ai" },
              { img: "https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/deepseek-color.svg", title: "DeepSeek", link: "https://www.deepseek.com" },
              { img: "https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/qwen-color.svg", title: "通义千问", link: "https://www.aliyun.com/product/bailian" },
              { img: "https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/zhipu-color.svg", title: "智谱GLM", link: "https://www.zhipuai.cn" }
            ].map((item, index) => (
              <Grid xs={6} sm={4} md={3} lg={12/7} key={index} sx={{
                animation: 'fadeIn 0.6s ease-out forwards',
                animationDelay: `${index * 0.1}s`
              }}>
                <Card sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 2.5,
                  height: '100%',
                  borderRadius: 3,
                  bgcolor: '#f8fafc',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }
                }}>
                  <Link href={item.link} target="_blank" sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: 'inherit'
                  }}>
                    <Box sx={{
                      mb: 1.5,
                      '& img': {
                        width: 48,
                        height: 48,
                        transition: 'transform 0.3s ease',
                      },
                      '&:hover img': {
                        transform: 'scale(1.1)'
                      }
                    }}>
                      <img src={item.img} alt={item.title} />
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                      {item.title}
                    </Typography>
                  </Link>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Uses Section */}
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Typography variant="h3" sx={{
          fontSize: '1.8rem',
          textAlign: 'center',
          mb: 4,
          fontWeight: 400,
          color: 'text.primary'
        }}>
          {t('大语言模型的主要用途')}
        </Typography>
        <Grid container spacing={3}>
          {[
            { title: t('自然语言处理'), desc: t('文本生成、语言翻译、摘要提取、情感分析等。') },
            { title: t('教育辅助'), desc: t('论文写作、作业辅助、知识问答、编程辅助等。') },
            { title: t('代码辅助'), desc: t('代码生成、代码补全、代码翻译、代码注释等。') },
            { title: t('创意生成'), desc: t('图像生成、音频生成、视频生成、设计生成等。') }
          ].map((item, index) => (
            <Grid xs={12} sm={6} md={3} key={index} sx={{
              animation: 'fadeIn 0.6s ease-out forwards',
              animationDelay: `${index * 0.15}s`
            }}>
              <Card sx={{
                height: '100%',
                borderRadius: 3,
                bgcolor: '#f8fafc',
                p: 3,
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }
              }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography gutterBottom variant="h5" component="div" sx={{
                    fontSize: '1.4rem',
                    mb: 1.5,
                    fontWeight: 400,
                    color: '#0078d7'
                  }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BaseIndex;
