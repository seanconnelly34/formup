import Loader from '../common/Loader';
import ListItem from './ListItem';

interface IListLayout {
	loading: boolean;
	entity: any;
}

const ListLayout = ({ loading, entity }: IListLayout) => {
	return (
		<div
			className={
				'flex items-center flex-col lg:grid lg:grid-rows-6 lg:grid-cols-1 w-full  h-full'
			}
		>
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
						<ListItem
							key={item.id}
							title={item.name}
							count={item.count}
							image={item.media}
							href={item.link}
						/>
					);
				})
			)}
		</div>
	);
};
export default ListLayout;
