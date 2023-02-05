/**
 * This slot allows replacing the default main dashboard button in the post editor and site editor.
 * It’s used for returning back to main wp-admin dashboard when editor is in fullscreen mode.
 * 
 * @link https://developer.wordpress.org/block-editor/reference-guides/slotfills/main-dashboard-button/
 */
import { registerPlugin } from '@wordpress/plugins';
import { __experimentalMainDashboardButton as MainDashboardButton } from '@wordpress/edit-post';

import { Button } from '@wordpress/components';

import { filter } from '@wordpress/components';

const MainDashboardButtonTest = () => (
    <MainDashboardButton>
        <Button
        style={{marginLeft: 15}}
        variant='primary'
        icon={ filter } >GBA: Slot Test</Button>
    </MainDashboardButton>
);

registerPlugin( 'main-dashboard-button-test', {
    render: MainDashboardButtonTest,
} );