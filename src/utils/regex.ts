export const vietnamPhoneRegex = /^(0|\+84)[\s.-]?((3[2-9]|5[2689]|7[06-9]|8[1-689]|9[0-46-9])[\s.-]?\d{3}[\s.-]?\d{4}|\d{9})$/;


export const isVietnamPhoneNumber = (phone: string) => {
    if (!phone) return false;
    const regex = new RegExp(vietnamPhoneRegex);
    return regex.test(phone);
}