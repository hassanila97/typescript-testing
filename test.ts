const isEmailValid = (email: string): boolean => {
    return email.includes("@") && email.includes(".")
}


test("test valid email (isEmailValid)", () => {
    const actualResult = isEmailValid("emma.andersson@gmail.com")

    expect(actualResult).toBe(true);
})

test("test invalid email (isEmailValid)", () => {
    const actualResult = isEmailValid("emma.anderssongmail.com")

    expect(actualResult).toBe(false);
})