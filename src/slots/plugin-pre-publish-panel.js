/**
 * This slot allows for injecting items into the bottom of the pre-publish panel that appears to confirm publishing after the user clicks “Publish”.
 * 
 * @link https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-pre-publish-panel/
 */
import { registerPlugin } from '@wordpress/plugins';
import { PluginPrePublishPanel } from '@wordpress/edit-post';

const PluginPrePublishPanelTest = () => (
    <PluginPrePublishPanel>
        <p>Pre Publish Panel</p>
    </PluginPrePublishPanel>
);

registerPlugin( 'pre-publish-panel-test', {
    render: PluginPrePublishPanelTest,
} );