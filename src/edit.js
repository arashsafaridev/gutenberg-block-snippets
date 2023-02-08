/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';


const {PanelBody, PanelRow, TextControl } = wp.components;

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const postType = useSelect(
		( select ) => select( 'core/editor' ).getCurrentPostType(),
		[]
	);

	const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );

	const metaFieldValue = meta[ 'gba_test' ];
	attributes.gba_test = metaFieldValue;

	const updateMetaValue = ( newValue ) => {
		setMeta( { ...meta, gba_test: newValue } );
		setAttributes( { gba_test: newValue } );
	};

	// const setIcon = (icon) => {
	// 	const iconPart = icon.split(',');
	// 	const icons = attributes.icons;
	// 	setAttributes(icons: {...icons, {"id" : iconPart[0], "class" : iconPart[1]}});
	// }

	// const getIcon = (icon) => {
	// 	const icons = attributes.icons ? attributes.icons : false;
	// 	const icon = icons ? icons[icon] : [];
	// 	return icon.join(',');
	// }
	const defaults = {
		'url': '',
		'title': '',
		'width': '',
		'content': '',
		'icons': [{"id":"","classes":""},{"id":"","classes":""}]
	}
	attributes = {...defaults, ...attributes};
	return (
		<>
			<InspectorControls>
				<PanelBody title="Form Settings" initialOpen={ true }>
					<PanelRow>
						<TextControl
							label="URL"
							onChange={ ( url ) => setAttributes( { url: url } ) }
							value={ attributes.url ? attributes.url : '' }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Width"
							onChange={ ( width ) => setAttributes( { width: width } ) }
							value={ attributes.width ? attributes.width : '' }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Title"
							onChange={ ( title ) => setAttributes( { title: title } ) }
							value={ attributes.title ? attributes.title : '' }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="ID and Classes"
							onChange={ () => setAttributes( { icons: [{"id":"ID-1", "classes": "classes-1"},{"id":"ID-2", "classes": "classes-2"}] } ) }
							value={ attributes.icons ? JSON.stringify(attributes.icons) : '' }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Meta Box Block Field"
							value={ metaFieldValue }
							onChange={ updateMetaValue }
						/>
					</PanelRow>
					
				</PanelBody>
			</InspectorControls>
			<p>{attributes.gba_test}</p>
			<figure>
				<img src={attributes.url} width={attributes.width}/>
				<figcaption>{attributes.title}</figcaption>
			</figure>
			<RichText
				className="paragraph"
				tagName="h2" // The tag here is the element output and editable in the admin
				value={ attributes.content ? attributes.content : '' } // Any existing content, either from the database or an attribute default
				allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
				onChange={ ( content ) => setAttributes( { content :content } ) } // Store updated content as a block attribute
				placeholder={ __( 'Heading...' ) } // Display this text before any content has been added by the user
			/>
			
			{attributes.icons && attributes.icons.map((icon, index) => {

					return (
						<span key={index} id={icon.id} className={icon.classes}>Span # {index}</span>
					)			
				}
			)}
			
			</>
		
	);
}
