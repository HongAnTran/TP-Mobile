import React, { useEffect, useState } from 'react'

export default function useCheckLocationPermission() {
    const [isPermission, setIsPermission] = useState(false)
    async function checkLocationPermission(): Promise<boolean> {
        try {
            const permissionStatus = await navigator.permissions.query({ name: "geolocation" });
            if (permissionStatus.state === "granted") {
                setIsPermission(true)
                return true;
            } else if (permissionStatus.state === "denied") {
                setIsPermission(false)

                return false;
            } else {
                setIsPermission(false)

                return false;
            }
        } catch (error) {
            setIsPermission(false)
            return false;
        }
    }
    useEffect(() => {
        checkLocationPermission()
    }, [])
    return {
        isPermission
    }
}
