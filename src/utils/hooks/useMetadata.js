/** @format */

import { useContext, useEffect } from 'react';
import { MetadataContext } from '../MetadataContext.js';

export function useMetadata({ title, description }) {
  const setMetadata = useContext(MetadataContext);

  useEffect(() => {
    setMetadata({ title, description });
    return () => {
      setMetadata({});
    };
  }, [title, description, setMetadata]);
}
