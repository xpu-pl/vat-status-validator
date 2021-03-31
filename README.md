# VAT status validator

It's a small js script automatically validating current VAT status (via official government API in a real time) for a specific Polish company. It allows to generate a proper badge.

## Result

For a not verified VAT payers:
![niezweryfikowany](https://user-images.githubusercontent.com/5007941/113215655-7bc3e300-927b-11eb-8e62-fa2824d01b93.png)

For a verified VAT payers:
![zweryfikowany](https://user-images.githubusercontent.com/5007941/113215670-81b9c400-927b-11eb-8204-5a85f1ae0f0d.png)

## Usage

Please add and configure script (replace example NIP number with your company's NIP number)

```
<script src="https://cdn.jsdelivr.net/gh/xpu-pl/vat-status-validator/js/vat-status-validator.js"></script>
<script>
  new VATStatusValidator("7792488801").addBadge(); // please replace 7792488801 with your company NIP number
</script>
```

Badge will be generated wherever you add element with id `vat-status-badge` for example:

```
<span id="vat-status-badge"></span>
```

## Demo

We have added this badge to our company page: [xpu.pl](https://xpu.pl)
