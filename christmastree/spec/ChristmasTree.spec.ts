'use strict';

import { ChristmasTree } from "../src/ChristmasTree"

describe("A new ChristmasTree", function() {
    it("is successfully created", function () {
        var myChristmasTree  = new ChristmasTree()


	expect(true).toEqual(true)
        expect(false).toBe(false)
        expect(30).toEqual(30)
        expect([]).toHaveLength(0)

    })
})


