import useSWR from 'swr';
import { Axios } from '@/services/api';
import { IEntity } from '@/types';
import { useEffect, useState } from 'react';
import Button from '@/components/common/Button';

interface IEntityMeta {
	current_page: number;
	from: number;
	path: string;
	per_page: number;
	to: number;
}

interface IEntityLinks {
	first: string;
	last: string;
	next: string;
	prev: string;
}

interface IEntityResponse {
	data: {
		data: IEntity[];
		meta: IEntityMeta;
		links: IEntityLinks;
	};
}

const urlToPage = (url?: string, entityName?: string) =>
	Number(url?.split(`${entityName}?page=`)[1]) || 1;

const useFetchEntity = (entityName: string) => {
	const [page, setPage] = useState(1);
	const [nextPage, setNextPage] = useState(0);
	const [prevPage, setPrevPage] = useState(0);
	const [lastPage, setLastPage] = useState(0);
	const {
		data: entity,
		error,
		mutate,
		isValidating,
	} = useSWR<IEntityResponse>(`/api/${entityName}?page=${page}`, Axios, {
		revalidateOnFocus: false,
		shouldRetryOnError: false,
	});

	useEffect(() => {
		setNextPage(page + 1);
		setPrevPage(page - 1);
		setLastPage(page + 1);
	}, [page]);

	useEffect(() => {
		if (entity?.data?.links) {
			setNextPage(urlToPage(entity?.data?.links?.next, entityName));
			setPrevPage(urlToPage(entity?.data?.links?.prev, entityName));
			setLastPage(urlToPage(entity?.data?.links?.last, entityName));
		}
	}, [entity]);

	const doNextPage = () => setPage(nextPage);
	const doPrevPage = () => setPage(prevPage);
	const doLastPage = () => setPage(lastPage);

	const renderPagination = () => {
		return (
			<div className={'flex flex-row'}>
				<Button
					disabled={!prevPage || prevPage === page}
					onClick={doPrevPage}
					className={'mr-4 bg-transparent h-fit font-ralewayLight'}
				>
					{'<'}
				</Button>
				<Button
					disabled={!prevPage || prevPage === page}
					onClick={doPrevPage}
					className={'mr-4 bg-transparent h-fit font-ralewayLight'}
				>
					{prevPage !== page ? prevPage || '...' : '...'}
				</Button>
				<Button className={'mr-4 h-fit text-xl'}>{page}</Button>
				{nextPage !== page ? (
					<Button
						disabled={!nextPage || lastPage === nextPage}
						onClick={doNextPage}
						className={
							'mr-4 h-fit bg-transparent font-ralewayLight'
						}
					>
						{lastPage === nextPage ? '...' : nextPage}
					</Button>
				) : null}
				{/*Keeping this here for now*/}
				{/*<Button className={'h-fit bg-transparent'}>...</Button>*/}
				{/*<Button onClick={doLastPage} className={'h-fit bg-transparent'}>{lastPage}</Button>*/}
				<Button
					disabled={
						!nextPage || nextPage === page || lastPage === nextPage
					}
					onClick={doNextPage}
					className={'bg-white h-fit font-ralewayLight'}
				>
					{'>'}
				</Button>
			</div>
		);
	};

	return {
		entity: entity?.data || null,
		error,
		mutateEntity: mutate,
		doNextPage,
		doPrevPage,
		lastPage,
		page,
		loading: isValidating,
		nextPage,
		prevPage,
		doLastPage,
		renderPagination,
	};
};

export default useFetchEntity;
