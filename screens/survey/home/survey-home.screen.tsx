import { SurveyHomeLayout, SurveyHomeModule } from '../../../components';
import { FC } from 'react';

type ISurveyHomeScreenProps = {};

export const SurveyHomeScreen: FC<ISurveyHomeScreenProps> = () => {
    return (
        <SurveyHomeLayout>
            <SurveyHomeModule />
        </SurveyHomeLayout>
    );
};

