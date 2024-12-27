/*
 * Ghost Blog dynamic open graph images v1.0
 * Copyright (c) [2024] [Rukshan @ruky.me]
 * This plugin is not stand-alone but works with a dynamic OG:image generator I built for general purpose
 * Please reach out to incoporate this into your Ghost blog
 */
const { escapeExpression, SafeString } = require("../services/handlebars");
const { metaData } = require("../services/proxy");

module.exports = async function generate_og_image(options) {
  if (options.data.root.statusCode >= 500) {
    return;
  }

  const { get: getMetaData } = metaData;

  const dataRoot = options.data.root;
  const meta = await getMetaData(dataRoot, dataRoot);
  const title = escapeExpression(meta.ogTitle);
  const publishedAt = meta.publishedDate;
  const description = escapeExpression(meta.ogDescription);

  // include more data as you like to replace on the og:image template
  // currently only title is included
  // less data means shorter image link
  const payload = {
    title: title,
  };

  const jsonPayload = JSON.stringify(payload);
  const b64 = btoa(jsonPayload);
  const strip_b64 = b64.replace(/=/g, "");
  return new SafeString(
    `<meta property="og:image" content="https://hicafe.co/demo/${strip_b64}/{blog_name}.png" />`,
  );
};
