function telephoneCheck(str) {
    let validPatterns = [
        // 555-555-5555
        /^\d{3}-\d{3}-\d{4}$/g,

        // 1 555-555-5555
        /^1 \d{3}-\d{3}-\d{4}$/g,

        // 1 (555) 555-5555
        /^1 \(\d{3}\) \d{3}-\d{4}$/g,

        //5555555555
        /^\d{3}\d{3}\d{4}$/g,

        //(555)555-5555
        /^\(\d{3}\)\d{3}-\d{4}$/g,

        //1(555)555-5555
        /^1\(\d{3}\)\d{3}-\d{4}$/g,

        //1 555 555 5555
        /^1 \d{3} \d{3} \d{4}$/g,
    ]
    return validPatterns.some((pattern) => pattern.test(str));;
}

telephoneCheck("555-555-5555");