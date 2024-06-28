// pages/sitemap.xml.js
function SiteMap() {}

export async function getServerSideProps({ res }) {
  const baseUrl = 'https://www.ninasys.vercel.app';
  const staticPages = [
    `${baseUrl}/`,
    `${baseUrl}/layanan`,
    `${baseUrl}/layanan/keluarga-berencana`,
    `${baseUrl}/layanan/periksa-kehamilan`,
    `${baseUrl}/layanan/imunisasi`,
    `${baseUrl}/layanan/layanan-anak`,
    `${baseUrl}/layanan/layanan-ibu`,
    `${baseUrl}/layanan/nifas`,
    `${baseUrl}/layanan/persalinan`,
  ];

  const allPages = [...staticPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allPages
      .map((url) => {
        return `
          <url>
            <loc>${url}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
          </url>
        `;
      })
      .join('')}
  </urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
