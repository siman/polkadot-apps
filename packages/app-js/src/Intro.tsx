// Copyright 2017-2019 @polkadot/app-js authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { I18nProps } from '@polkadot/ui-app/types';

import { Trans } from 'react-i18next';
import React, { Fragment } from 'react';

import translate from './translate';

type Props = I18nProps;

const Intro = (props: Props) => {
  const { t } = props;
  return (
    <Fragment>
      <Trans i18nKey='appJsIntro'>
        <p>All code is wrapped within an async closure, allowing access to
          <a href='https://www.npmjs.com/package/@polkadot/api' title={t('Go to module page on npmjs.com')} target='_blank'>@polkadot/api</a>,
          <a href='https://www.npmjs.com/package/@polkadot/util-crypto' title={t('Go to module page on npmjs.com')} target='_blank'>@polkadot/util-crypto</a>,
          <a href='https://www.npmjs.com/package/@polkadot/keyring' title={t('Go to module page on npmjs.com')} target='_blank'>@polkadot/keyring</a> and
          <a href='https://www.npmjs.com/package/@polkadot/util' title={t('Go to module page on npmjs.com')} target='_blank'>@polkadot/util</a>.
        </p>
      </Trans>
      <p>{t(`These modules are also exposed to the window object and can be accessed by typing 'api', 'utilCrypto', 'keyring' and 'util' and in your browser's console.`)}</p>
     </Fragment>
  );
};
export default translate(Intro);