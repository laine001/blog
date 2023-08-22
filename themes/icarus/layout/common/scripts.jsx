const { Component, Fragment } = require('inferno');
const { toMomentLocale } = require('hexo/lib/plugins/helper/date');
const Plugins = require('./plugins');

module.exports = class extends Component {
    render() {
        const { site, config, helper, page } = this.props;
        const { url_for, cdn } = helper;
        const { article } = config;
        const language = toMomentLocale(page.lang || page.language || config.language || 'en');

        let fold = 'unfolded';
        let clipboard = true;
        if (article && article.highlight) {
            if (typeof article.highlight.clipboard !== 'undefined') {
                clipboard = !!article.highlight.clipboard;
            }
            if (typeof article.highlight.fold === 'string') {
                fold = article.highlight.fold;
            }
        }

        const embeddedConfig = `var IcarusThemeSettings = {
            article: {
                highlight: {
                    clipboard: ${clipboard},
                    fold: '${fold}'
                }
            }
        };`;

        return <Fragment>
            {/* 替换为字节cdn */}
            <script src="https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-y/jquery/3.3.1/jquery.min.js"></script>
            <script src="https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/moment.js/2.22.2/moment-with-locales.min.js"></script>

            {clipboard && <script src="https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-y/clipboard.js/2.0.4/clipboard.min.js" defer></script>}
            <script dangerouslySetInnerHTML={{ __html: `moment.locale("${language}");` }}></script>
            <script dangerouslySetInnerHTML={{ __html: embeddedConfig }}></script>
            <script src={url_for('/js/column.js')}></script>
            <Plugins site={site} config={config} page={page} helper={helper} head={false} />
            <script src={url_for('/js/main.js')} defer></script>
        </Fragment>;
    }
};