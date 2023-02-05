/**
 * This slot will add a new item to the More Tools & Options section.
 * 
 * @link https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-more-menu-item/
 */
import { registerPlugin } from '@wordpress/plugins';
import { PluginMoreMenuItem } from '@wordpress/edit-post';
import { warning } from '@wordpress/icons';

const MyButtonMoreMenuItemTest = () => (
    <PluginMoreMenuItem
        icon={ warning }
        onClick={ () => {
            alert( 'Gutenberg Rocks!' );
        } }
    >
        GBA: Plugins More Menu Item
    </PluginMoreMenuItem>
);

registerPlugin( 'more-menu-item-test', { render: MyButtonMoreMenuItemTest } );