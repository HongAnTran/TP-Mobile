import React, { useEffect, useState } from 'react'

export default function useGelocation() {
    const [location, setLocaion] = useState<{
        latitude: number,
        longitude: number
    } | null>(null)
    const [error, setError] = useState<string>("")
    async function getCurrentPosition() {
        try {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    setLocaion({ latitude, longitude })
                },
                (error) => {
                    setError(error.message)
                },
                { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
            );
        } catch (error) {
            setError(JSON.stringify(error))
        }
    }
    useEffect(() => {
        getCurrentPosition()
    }, [])
    return {
        location,
        error,
    }
}
