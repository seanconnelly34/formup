import Loader from '../common/Loader';
import GridItem from './GridItem';

interface IGridLayout {
	loading: boolean;
	entity: any;
}

const GridLayout = ({ loading, entity }: IGridLayout) => {
	return (
		<div className='gridClass grid-cols-1 lg:grid-cols-4 gap-4'>
			{loading ? (
				<Loader
					wrapperStyle={{
						marginLeft: 'auto',
						marginRight: 'auto',
					}}
				/>
			) : (
				entity?.data?.map((item: any) => {
					return (
						<GridItem
							key={item.id}
							title={item.name}
							subtitle={item.body}
							backgroundImage={item.media}
							href={item.link}
						/>
					);
				})
			)}
		</div>
	);
};
export default GridLayout;
