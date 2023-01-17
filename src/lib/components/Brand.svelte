<span class="brand-wrapper">
	<a href="/" class="brand">
		<div>
			<img src={'/icons/pcv.png'} alt={'PCV Prize'} />
		</div>
		PCV Prize
	</a>
</span>

<style lang="scss">
	.brand-wrapper {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: center;
		margin-right: 15px;
	}

	.brand {
		color: var(--c-primary);

		& > * {
			display: inline-block;
		}

		&:hover {
			text-decoration: none;
		}
	}

	img {
		height: 24px;
		width: 24px;
	}
</style>
