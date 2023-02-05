/**
 * This slot allows for injecting items into the bottom of the post-publish panel that appears after a post is published.
 * @link https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-post-publish-panel/
 */
import { registerPlugin } from '@wordpress/plugins';
import { PluginPostPublishPanel } from '@wordpress/edit-post';

const PluginPostPublishPanelTest = () => (
    <PluginPostPublishPanel>
        <p>GBA: Slot Test Post Publish Panel</p>
    </PluginPostPublishPanel>
);

registerPlugin( 'post-publish-panel-test', {
    render: PluginPostPublishPanelTest,
} );