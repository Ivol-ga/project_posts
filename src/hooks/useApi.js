import React, { useEffect, useState } from 'react';

export const useApi = (postParam) => {
    const [dataPost, setDataPost] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        postParam()
            .then(res => setDataPost(res))
            .catch(err => setError(err))
            .finally(() => {setLoading(false)})
    }, [postParam])
    return {dataPost, loading, error}

}