/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({attributes}) {
	useBlockProps.save();
	const icons = attributes.icons ? attributes.icons : false;
	return (
		<>
			<figure>
				<img src={attributes.url} width={attributes.width}/>
				<figcaption>{attributes.title}</figcaption>
			</figure>
			<RichText.Content tagName="h2" className="paragraph" value={ attributes.content } />
			
			{icons && icons.map((icon, index) => {

					return (
						<span key={index} id={icon.id} className={icon.classes}>Span # {index + 1}</span>
					)
						
				}
			)}
		</>
	);
}
