import { MainLayout, MainpageModule } from '../../../components';
import { FC } from 'react';

type IMainpageScreenProps = {};

export const MainpageScreen: FC<IMainpageScreenProps> = () => {
    return (
        <MainLayout>
            <MainpageModule />
        </MainLayout>
    );
};

