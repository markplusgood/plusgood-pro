'use client';

import { useLocale } from 'next-intl';
import RabbitAnimationEn from './RabbitAnimationEn';
import RabbitAnimationRu from './RabbitAnimationRu';

const RabbitAnimation = () => {
    const locale = useLocale();
    return locale === 'en' ? <RabbitAnimationEn /> : <RabbitAnimationRu />;
};

export default RabbitAnimation;