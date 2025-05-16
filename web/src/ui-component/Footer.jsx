// material-ui
import { Link, Container, Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const Footer = () => {
  const siteInfo = useSelector((state) => state.siteInfo);
  const { t } = useTranslation();

  const defaultFooterHtml = '© 2025 llmhub.com.cn 版权所有  <a href="https://beian.miit.gov.cn/" target="_blank">津ICP备2025029271号</a>  <img src="https://beian.mps.gov.cn/img/logo01.dd7ff50e.png" width="20"/> <a href="https://beian.mps.gov.cn/#/query/webSearch?code=33010902004083" rel="noreferrer" target="_blank">浙公网安备33010902004083号</a>';

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '64px', borderRadius: 0 }}>
      <Box sx={{ textAlign: 'center' }}>
        <div className="custom-footer" dangerouslySetInnerHTML={{ __html: siteInfo.footer_html || defaultFooterHtml }}></div>
      </Box>
    </Container>
  );
};

export default Footer;
