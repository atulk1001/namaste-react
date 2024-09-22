import  {sum} from "../../components/sum"
test("Sum function should calculate sum of two numbers",() => {
    const res = sum(2,3);
    // Assertion
    expect(res).toBe(5);
});