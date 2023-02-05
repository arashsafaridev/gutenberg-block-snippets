/**
 * This slot allows for adding a new item into the More Options area.
 * 
 * @link https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-block-settings-menu-item/
 */
import { registerPlugin } from '@wordpress/plugins';
import { PluginBlockSettingsMenuItem } from '@wordpress/edit-post';

const PluginBlockSettingsMenuGroupTest = () => (
    <PluginBlockSettingsMenuItem
        allowedBlocks={ [ 'core/paragraph' ] }
        icon="insert"
        label="BGA: Slot Test"
        onClick={ () => {
            alert( 'clicked' );
        } }
    />
);

registerPlugin( 'block-settings-menu-group-test', {
    render: PluginBlockSettingsMenuGroupTest,
} );