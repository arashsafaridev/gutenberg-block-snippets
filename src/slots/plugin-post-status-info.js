import { registerPlugin } from '@wordpress/plugins';
import { PluginPostStatusInfo } from '@wordpress/edit-post';

const PluginPostStatusInfoTest = () => (
    <PluginPostStatusInfo>
        <p>GBA: SlotFill Test Post Status Info</p>
    </PluginPostStatusInfo>
);

registerPlugin( 'post-status-info-test', { render: PluginPostStatusInfoTest } );